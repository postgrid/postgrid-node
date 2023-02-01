import { PostGrid } from '../src/index'

(async () => {
  const client = new PostGrid({
    mail: process.env.POSTGRID_MAIL_API_KEY,
    addr: process.env.POSTGRID_ADDR_API_KEY,
  })
  console.log('creating a single Contact...')
  const who = {
    addressLine1: '2929 Eagledale Dr',
    city: 'Indianapolis',
    provinceOrState: 'IN',
    postalOrZip: '46224',
    countryCode: 'US',
    firstName: 'Jeffrrrrrrr',
    lastName: 'Jeffrrrrrrrrrrrrrrrrrr',
    email: 'Jeff@Jeffr.com',
    phoneNumber: '317-555-1212',
    companyName: 'Jeff',
    jobTitle: 'Jeff',
  }
  const contact = await client.contact.create(who)
  console.log('creating a single return envelope...')
  const returnEnvelope = await client.returnEnvelope.create(contact.contact!.id)
  console.log('creating 2 return envelope orders...')
  const one = await client.returnEnvelopeOrder.create(returnEnvelope.returnEnvelope!.id, 5000, "test")
  const one_2 = await client.returnEnvelopeOrder.create(returnEnvelope.returnEnvelope!.id, 5000, "test")

  if (one.success) {
    console.log('Success!')
  } else {
    console.log('Error! Creating the return envelope order failed, and the output is:')
    console.log(one)
  }

  if (one.success) {
    console.log('fetching a single return envelope order...')
    const two = await client.returnEnvelopeOrder.get(returnEnvelope.returnEnvelope!.id, one.returnEnvelopeOrder!.id)
    if (two.success) {
      console.log('Success!')
    } else {
      console.log('Error! Fetching the return envelope failed, and the output is:')
      console.log(two)
    }
  }

  console.log('listing the first page of 40 return envelopes orders...')
  const tre = await client.returnEnvelopeOrder.list(returnEnvelope.returnEnvelope!.id)
  if (tre.success) {
    console.log(`Success! The list contained ${tre.returnEnvelopeOrderList!.data!.length} return envelope orders...`)
  } else {
    console.log('Error! Listing the return envelope orders failed, and the output is:')
    console.log(tre)
  }

  console.log('Filling first return envelope order...')
  const four = await client.returnEnvelopeOrder.fill(returnEnvelope.returnEnvelope!.id, one.returnEnvelopeOrder!.id)
  if (four) {
    console.log(`Order was filled...`)
  } else {
    console.log('Error! Filling the return envelope order failed, and the output is:')
    console.log(tre)
  }

  console.log('Cancelling second return envelope order...')
  const five = await client.returnEnvelopeOrder.cancel(returnEnvelope.returnEnvelope!.id, one_2.returnEnvelopeOrder!.id)
  if (five.success) {
    console.log(`Success! The order was cancelled...`)
  } else {
    console.log('Error! Cancelling the return envelope order failed, and the output is:')
    console.log(tre)
  }

})()
