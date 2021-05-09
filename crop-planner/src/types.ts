export type Crop = { value: number, label: string, humus_delta: number }

export type SeasonalCrop = {
  year: number,
  crop: Crop | null,
}

export type Field = {
  id: number,
  name: string,
  area: number,
  crops: Array<SeasonalCrop>,
}

export type HumusBalanceData = {
  field_id: number,
  humus_balance: number
}
