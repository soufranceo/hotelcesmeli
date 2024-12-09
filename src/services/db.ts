import Dexie from 'dexie';

class HotelDatabase extends Dexie {
  analytics: Dexie.Table<any, number>;
  rooms: Dexie.Table<any, string>;
  content: Dexie.Table<any, string>;
  seo: Dexie.Table<any, string>;

  constructor() {
    super('hotelAdminDB');
    
    this.version(1).stores({
      analytics: '++id, timestamp, visitorId, page',
      rooms: 'id, title, description',
      content: 'id, title, content',
      seo: 'id, title, description'
    });

    this.analytics = this.table('analytics');
    this.rooms = this.table('rooms');
    this.content = this.table('content');
    this.seo = this.table('seo');
  }
}

const db = new HotelDatabase();

export const getDB = () => db;

// Clean old data (older than 7 days)
export const cleanOldData = async () => {
  const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
  await db.analytics.where('timestamp').below(sevenDaysAgo).delete();
};

// Run cleanup every day
setInterval(cleanOldData, 24 * 60 * 60 * 1000);

export default db;