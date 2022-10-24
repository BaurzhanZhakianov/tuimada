interface IStats {
  status: string;
  score: number;
  points: number;
}

interface IService {
  id: string;
  title: string;
  badge: number;
  type: 'maps' | 'history' | 'feedback';
}

export type {IStats, IService};
