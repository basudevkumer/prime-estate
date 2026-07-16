import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_PATH = path.join(process.cwd(), "src", "db", "prime-estate.db");

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    const exists = fs.existsSync(DB_PATH);
    db = new Database(DB_PATH);

    if (!exists) {
      initializeDb(db);
      seedDb(db);
    }
  }
  return db;
}

function initializeDb(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS properties (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      location TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT,
      price INTEGER NOT NULL,
      bedrooms INTEGER NOT NULL DEFAULT 0,
      bathrooms INTEGER NOT NULL DEFAULT 0,
      area INTEGER NOT NULL DEFAULT 0,
      image TEXT NOT NULL,
      gallery TEXT DEFAULT '[]',
      featured INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

function seedDb(db: Database.Database) {
  const stmt = db.prepare(`
    INSERT INTO properties (id, title, location, type, description, price, bedrooms, bathrooms, area, image, gallery, featured)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const seedData = getSeedData();
  const insertMany = db.transaction((items: typeof seedData) => {
    for (const item of items) {
      stmt.run(
        item.id,
        item.title,
        item.location,
        item.type,
        item.description,
        item.price,
        item.bedrooms,
        item.bathrooms,
        item.area,
        item.image,
        JSON.stringify(item.gallery),
        item.featured ? 1 : 0,
      );
    }
  });

  insertMany(seedData);
}

function getSeedData() {
  const locations = [
    "Miami, Florida",
    "New York City",
    "Los Angeles, California",
    "San Francisco, CA",
    "Dubai, UAE",
    "London, UK",
    "Paris, France",
    "Beverly Hills, CA",
    "Malibu, California",
    "Aspen, Colorado",
    "Hamptons, New York",
    "Monaco",
    "Singapore",
    "Sydney, Australia",
    "Tokyo, Japan",
  ];

  const types = ["Villa", "Penthouse", "Apartment", "Smart Home", "Commercial"];

  const typeAImages: Record<string, number[]> = {
    Villa: [1, 3, 4, 6, 8, 9, 11, 13, 15, 17],
    Penthouse: [2, 5, 7, 10, 12, 14, 16],
    Apartment: [1, 2, 4, 6, 8, 10, 12, 14],
    "Smart Home": [3, 5, 7, 9, 11, 13, 15],
    Commercial: [2, 4, 6, 8, 10, 12, 14, 16],
  };

  const adjectives = [
    "Luxury",
    "Grand",
    "Elite",
    "Premier",
    "Imperial",
    "Royal",
    "Crystal",
    "Golden",
    "Platinum",
    "Diamond",
    "Stellar",
    "Majestic",
    "Opulent",
    "Exclusive",
    "Prestige",
    "Serene",
    "Panoramic",
    "Infinity",
    "Harmony",
    "Azure",
  ];

  const nouns = [
    "Villa",
    "Residence",
    "Estate",
    "Mansion",
    "Penthouse",
    "Retreat",
    "Palace",
    "Manor",
    "Tower",
    "Heights",
    "Gardens",
    "Terrace",
    "Skyline",
    "Haven",
    "Oasis",
  ];

  const descriptions = [
    "Experience unparalleled luxury in this meticulously designed residence. Floor-to-ceiling windows frame breathtaking views while premium finishes and smart home technology create the ultimate living experience.",
    "A masterpiece of modern architecture and design. This stunning property features open-concept living spaces, a gourmet chef's kitchen, and resort-style amenities that redefine sophisticated living.",
    "Welcome to your private sanctuary. This exquisite property offers the perfect blend of elegance and comfort, with expansive living areas, a private pool, and lush landscaped gardens.",
    "Perched in one of the most coveted locations, this remarkable residence delivers panoramic views, world-class finishes, and an unrivaled lifestyle opportunity for the discerning buyer.",
    "Step into a world of refined luxury. Every detail of this exceptional home has been thoughtfully curated, from the imported marble floors to the custom millwork and state-of-the-art appliances.",
    "An extraordinary opportunity to own a piece of architectural brilliance. Soaring ceilings, walls of glass, and seamless indoor-outdoor living define this spectacular property.",
    "Discover the pinnacle of luxury living. This breathtaking residence combines sophisticated design with unparalleled comfort, featuring a private spa, infinity pool, and stunning city views.",
    "Nestled in an exclusive enclave, this stunning property offers complete privacy and serenity. The thoughtfully designed layout maximizes natural light and captures stunning vistas.",
    "A rare gem in the heart of the city. This meticulously crafted residence features designer finishes, a private terrace, and access to world-class amenities including concierge service.",
    "Elevate your lifestyle with this extraordinary property. From the grand foyer to the rooftop terrace, every space exudes sophistication and elegance.",
  ];

  const galleryPool = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
  ];

  function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickN<T>(arr: T[], n: number): T[] {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
  }

  function getImageForType(type: string, index: number): string {
    const available = typeAImages[type] || [1, 2, 3, 4, 5, 6, 7, 8];
    const imgNum = available[index % available.length];
    return `/images/property-${imgNum}.jpg`;
  }

  const items: any[] = [];
  const usedLocations = new Map<string, number>();

  for (let i = 0; i < 36; i++) {
    const id = String(i + 1);
    const type = pick(types);
    const location = pick(locations);
    const count = (usedLocations.get(location) || 0) + 1;
    usedLocations.set(location, count);

    const suffix = count > 1 ? ` ${romanNumeral(count)}` : "";
    const adj = pick(adjectives);
    const noun = pick(nouns);
    const title = `${adj} ${noun}${suffix}`;

    const price = [
      2500000, 3800000, 4500000, 5200000, 6200000, 7800000, 8900000, 12000000,
      15000000, 18500000,
    ][i % 10];
    const bedrooms = [3, 4, 5, 6, 7][i % 5];
    const bathrooms = [2, 3, 4, 5, 6][i % 5];
    const area = [3200, 4500, 5400, 6200, 7100, 8500, 10000][i % 7];

    const image = getImageForType(type, i);
    const gallery = JSON.stringify(pickN(galleryPool, 4));
    const featured = i < 8 ? 1 : 0;

    items.push({
      id,
      title,
      location,
      type,
      description: descriptions[i % descriptions.length],
      price,
      bedrooms,
      bathrooms,
      area,
      image,
      gallery,
      featured,
    });
  }

  return items;
}

function romanNumeral(n: number): string {
  const map: Record<number, string> = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
  };
  return map[n] || String(n);
}

export function getAllProperties() {
  const db = getDb();
  const rows = db
    .prepare("SELECT * FROM properties ORDER BY created_at DESC")
    .all() as any[];
  return rows.map(mapRow);
}

export function getPropertyById(id: string) {
  const db = getDb();
  const row = db
    .prepare("SELECT * FROM properties WHERE id = ?")
    .get(id) as any;
  return row ? mapRow(row) : null;
}

export function getFeaturedProperties() {
  const db = getDb();
  const rows = db
    .prepare(
      "SELECT * FROM properties WHERE featured = 1 ORDER BY created_at DESC",
    )
    .all() as any[];
  return rows.map(mapRow);
}

export function getRelatedProperties(currentId: string, limit = 3) {
  const db = getDb();
  const rows = db
    .prepare("SELECT * FROM properties WHERE id != ? ORDER BY RANDOM() LIMIT ?")
    .get(currentId, limit) as any[];
  return (rows as any[]).map(mapRow);
}

function mapRow(row: any) {
  return {
    ...row,
    featured: Boolean(row.featured),
    gallery:
      typeof row.gallery === "string" ? JSON.parse(row.gallery) : row.gallery,
  };
}
