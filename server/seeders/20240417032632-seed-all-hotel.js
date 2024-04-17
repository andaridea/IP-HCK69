'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const axios = require('axios');
    const hotelList = []

    try {
      const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/static/hotels',
        params: { page: '0' },
        headers: {
          'X-RapidAPI-Key': 'efee187d65msh83c0b508a568201p174271jsnf5d872bb91ad',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
      };
  
      const { data } = await axios.request(options)
      const hotels = data.result.map((hotel) => {
        return hotel.hotel_id
      })
      for (let i = 0; i < 100; i++) {
        const hotelId = hotels[i]
        const options = {
          method: 'GET',
          url: 'https://booking-com.p.rapidapi.com/v2/hotels/details',
          params: {
            currency: 'AED',
            locale: 'en-gb',
            checkout_date: '2024-09-15',
            hotel_id: hotelId,
            checkin_date: '2024-09-14'
          },
          headers: {
            'X-RapidAPI-Key': 'efee187d65msh83c0b508a568201p174271jsnf5d872bb91ad',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
          }
        };
        const { data } = await axios.request(options)
        
        const roomId = Object.keys(data.rooms)[0]
        const hotel = {
          name: data.hotel_name,
          address: data.address,
          description: data.rooms[roomId].description,
          image: data.rooms[roomId].photos[0].url_original,
          price: data.composite_price_breakdown.net_amount.value,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        hotelList.push(hotel)
        console.log(hotel)
      }  
    } catch (error) {
      console.log(error)
    }
    await queryInterface.bulkInsert("Hotels", hotelList, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Hotels")
  }
};
