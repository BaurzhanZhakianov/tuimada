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

interface OctaneMark {
  octaneNumber: number;
  price: number;
  name: string;
}

interface IStation {
  id: string;
  number: number;
  latitude: number;
  longitude: number;
  address: string;
  marks: OctaneMark[];
}

export type {IStats, IService, IStation};
