export type SteamSpyGame = {
  appid: number;
  name: string;
  developer: string;
  publisher: string;
  score_rank: string;
  positive: number;
  negative: number;
  userscore: number;
  owners: string;
  average_forever: number;
  average_2weeks: number;
  median_forever: number;
  median_2weeks: number;
  price: string;
  initialprice: string;
  discount: string;
  ccu: number;
};

export type SteamSpyGames = Record<string, SteamSpyGame>;

export function getSteamHeaderImage(appid: number | string): string {
  return `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${appid}/header.jpg`;
}

export async function fetchSteamAPI(): Promise<SteamSpyGame[] | undefined> {
  try {
    const response = await fetch(
      "/steamspy/api.php?request=top100forever"
    );

    if (!response.ok) {
      throw new Error(`Could not fetch data: ${response.status}`);
    }

    const data = (await response.json()) as SteamSpyGames;
    const games = Object.values(data);

    return games;
  } catch (error) {
    console.error(error);
  }
}
