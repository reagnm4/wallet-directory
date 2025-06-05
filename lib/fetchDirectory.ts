// lib/fetchDirectory.ts
import axios from 'axios';

export async function fetchDirectoryData() {
  const res = await axios.get('https://sheetdb.io/api/v1/yri5n5wyx5n44');
  return res.data;
}
