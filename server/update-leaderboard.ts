import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { log } from './vite';
import axios from 'axios';
import { parse } from 'csv-parse/sync';

// URL of the CSV data
const CSV_URL = 'https://app.trevor.io/share/view/7794ab07-e8af-4386-a596-0a44a064109c/1d/pennygambl3r_Affiliate_Stake_com_Wager_Race_Statistics.csv?seed=87';

// Get the current file path and directory (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to update the leaderboard JSON file
export async function updateLeaderboardData() {
  try {
    log('Fetching leaderboard data from CSV source...', 'leaderboard-updater');
    const response = await axios.get(CSV_URL);
    
    // Parse the CSV data
    const records = parse(response.data, {
      columns: true,
      skip_empty_lines: true
    });
    
    // Transform to the required format
    const transformedData = records.map((record: any) => ({
      user_name: record.user_name,
      wagered: parseFloat(record.wagered),
      rank: parseInt(record.rank)
    }));
    
    // Path to the JSON file
    const jsonFilePath = path.resolve(__dirname, '../client/src/data/json/leaderboard-data.json');
    
    // Ensure the directory exists
    const dirPath = path.dirname(jsonFilePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Write the transformed data to the JSON file
    fs.writeFileSync(jsonFilePath, JSON.stringify(transformedData, null, 2));
    
    log('Leaderboard data updated successfully!', 'leaderboard-updater');
    return true;
  } catch (error) {
    log(`Error updating leaderboard data: ${error}`, 'leaderboard-updater');
    return false;
  }
}

// Schedule regular updates (e.g., once a day)
export function scheduleLeaderboardUpdates(intervalHours: number = 24) {
  // Initial update
  updateLeaderboardData();
  
  // Schedule recurring updates
  setInterval(() => {
    updateLeaderboardData();
  }, intervalHours * 60 * 60 * 1000);
  
  log(`Scheduled leaderboard updates every ${intervalHours} hours`, 'leaderboard-updater');
}