interface CardProductProps {
  id?: string,
  roomNumber: string,
  roomType?: string,
  price: string,
  priceTime?: string,
  countReviews?: number,
  rating?: 0 | 1 | 2 | 3 | 4 | 5,
  gallery?: string[],
}

export default CardProductProps;
