require('supertest');
const {Rental} = require('../../models/rental');
const mongoose = require('mongoose');
const { items } = require('joi/lib/types/array');

describe("api/returns", () => {
  let server;
  let customerId;
  let movieId;
  let rental;

  beforeEach(async () => {
    server = require("../../index");

    customerId = mongoose.Types.ObjectId();
    movieId = mongoose.Types.ObjectId();

    rental = new Rental({ 
        customer: {
            _id: customerId,
            name: '12345',
            phone: '12345'
        },
        movie: {
            _id: movieId,
            title: '12345',
            dailyRentalRate: 2 
        }
    });
    await rental.save();
  });

  afterEach(async () => {
    server.close();
    await Rental.remove({});
  });

  it('should return 401 if client is not logged in', async () => {

  });
});
