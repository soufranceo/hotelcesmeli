import React, { useState } from 'react';
import { Plus, Edit, Trash2, Image, Save, X } from 'lucide-react';

interface Room {
  id: string;
  title: string;
  description: string;
  capacity: number;
  size: string;
  amenities: string[];
  images: string[];
}

const RoomManager = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);

  const handleSave = (room: Room) => {
    if (currentRoom) {
      setRooms(rooms.map(r => r.id === room.id ? room : r));
    } else {
      setRooms([...rooms, { ...room, id: Date.now().toString() }]);
    }
    setIsEditing(false);
    setCurrentRoom(null);
  };

  const handleDelete = (id: string) => {
    setRooms(rooms.filter(room => room.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Oda Yönetimi</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
        >
          <Plus className="w-5 h-5 mr-2" />
          Yeni Oda Ekle
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <RoomForm
              room={currentRoom}
              onSave={handleSave}
              onCancel={() => {
                setIsEditing(false);
                setCurrentRoom(null);
              }}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map(room => (
          <div key={room.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{room.title}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setCurrentRoom(room);
                    setIsEditing(true);
                  }}
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(room.id)}
                  className="p-2 text-gray-600 hover:text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{room.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Image className="w-4 h-4 mr-2" />
              {room.images.length} Resim
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface RoomFormProps {
  room?: Room | null;
  onSave: (room: Room) => void;
  onCancel: () => void;
}

const RoomForm: React.FC<RoomFormProps> = ({ room, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Omit<Room, 'id'>>({
    title: room?.title || '',
    description: room?.description || '',
    capacity: room?.capacity || 2,
    size: room?.size || '',
    amenities: room?.amenities || [],
    images: room?.images || []
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({ ...formData, id: room?.id || '' });
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Oda Adı</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Açıklama</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
        >
          <Save className="w-5 h-5 mr-2" />
          Kaydet
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <X className="w-5 h-5 mr-2" />
          İptal
        </button>
      </div>
    </form>
  );
};

export default RoomManager;