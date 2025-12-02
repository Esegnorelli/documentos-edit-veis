export interface InventoryItem {
  name: string;
  unit: string;
}

export interface InventoryCategory {
  title: string;
  items: InventoryItem[];
}

export type DocumentType = 'oil' | 'waste' | 'general_inventory' | 'daily_stock';