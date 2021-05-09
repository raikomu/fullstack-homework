import { Crop, Field, HumusBalanceData } from './types'

const SOIL_SERVICE_URL = 'http://localhost:3000'

export const fetchFields = async (): Promise<Array<Field>> =>
  await fetch(`${SOIL_SERVICE_URL}/fields`).then(response => response.json())

export const fetchCrops = async (): Promise<Array<Crop>> =>
  await fetch(`${SOIL_SERVICE_URL}/crops`).then(response => response.json())

export const fetchHumusBalances = async(fieldsData: Array<Field>): Promise<Array<HumusBalanceData>> =>
  await fetch(`${SOIL_SERVICE_URL}/humus_balances`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(fieldsData)
  }).then(response => response.json())
