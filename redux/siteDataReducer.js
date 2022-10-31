import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  {
    id: '1',
    status: 'Хит продаж',
    name: 'Каркасный прямоугольный бассейн ',
    price: '1 200 000 сум',
    sale_price: '1 250 000 сум',
    capacity: '1662',
    size: '220x240x60см',
  },
  {
    id: '2',
    status: 'Популярное',
    name: 'Каркасный прямоугольный бассейн ',
    price: '1 200 000 сум',
    sale_price: '1 250 000 сум',
    capacity: '1662',
    size: '220x240x60см',
  },
  {
    id: '3',
    status: 'Pекомендуем',
    name: 'Каркасный прямоугольный бассейн ',
    price: '1 200 000 сум',
    sale_price: '1 250 000 сум',
    capacity: '1662',
    size: '220x240x60см',
  },
  {
    id: '4',
    status: '-17% скидка',
    name: 'Каркасный прямоугольный бассейн ',
    price: '1 200 000 сум',
    sale_price: '1 250 000 сум',
    capacity: '1662',
    size: '220x240x60см',
  },
  {
    id: '5',
    status: 'Новинки',
    name: 'Каркасный прямоугольный бассейн ',
    price: '1 200 000 сум',
    sale_price: '1 250 000 сум',
    capacity: '1662',
    size: '220x240x60см',
  },
  {
    id: '6',
    status: 'Новинки',
    name: 'Каркасный прямоугольный бассейн ',
    price: '1 200 000 сум',
    sale_price: '1 250 000 сум',
    capacity: '1662',
    size: '220x240x60см',
  },
  {
    id: '7',
    status: 'Хит продаж',
    name: 'Каркасный прямоугольный бассейн ',
    price: '1 200 000 сум',
    sale_price: '1 250 000 сум',
    capacity: '1662',
    size: '220x240x60см',
  },
]
const siteProducts = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})
export default siteProducts.reducer
