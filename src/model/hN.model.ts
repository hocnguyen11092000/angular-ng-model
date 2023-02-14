export class hN {
  data: HnArray[] = [];

  setData(data: HnArray[]) {
    if (data && data.length > 0) {
      this.data = data.map((item: HnArray) => {
        return new HnArray(item);
      });
    }
  }
}

export class HnArray {
  lang: string = '';
  name: string = '';
  id: string = '';
  config: HNConfig[] = [];
  content: HNContent[] = [];

  constructor(data: HnArray) {
    if (data) {
      this.lang = data.lang;
      this.name = data.name;
      this.id = data.id;

      if (data.config && data.config.length > 0) {
        this.config = data.config.map((item: HNConfig) => {
          return new HNConfig(item);
        });
      }

      if (data.content && data.content.length > 0) {
        this.content = data.content.map((item: HNContent) => {
          return new HNContent(item);
        });
      }
    }
  }
}

export class HNConfig {
  amount: number | null = null;
  unit: string = '';
  tier: HNTier = {
    tierName: '',
    rank: null,
  };

  constructor(data: HNConfig) {
    if (data) {
      this.amount = data.amount;
      this.unit = data.unit;
      this.tier = new HNTier(data.tier);
    }
  }
}

export class HNTier {
  tierName: string = '';
  rank: number | null = null;

  constructor(data: HNTier) {
    if (data) {
      this.tierName = data.tierName;
      this.rank = data.rank;
    }
  }
}

export class HNContent {
  key: string = '';
  value: string = '';

  constructor(data: HNContent) {
    if (data) {
      this.key = data.key;
      this.value = data.value;
    }
  }
}
