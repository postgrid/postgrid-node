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
  const returnEnvelopeOrder = await client.returnEnvelopeOrder.create(returnEnvelope.returnEnvelope!.id, 5000, "test")
  const returnEnvelopeOrder2 = await client.returnEnvelopeOrder.create(returnEnvelope.returnEnvelope!.id, 5000, "test")

  if (returnEnvelopeOrder.success) {
    console.log('Success!')
  } else {
    console.log('Error! Creating the return envelope order failed, and the output is:')
    console.log(returnEnvelopeOrder)
  }

  if (returnEnvelopeOrder.success) {
    console.log('fetching a single return envelope order...')
    const getreturnEnvelopeOrder = await client.returnEnvelopeOrder.get(returnEnvelope.returnEnvelope!.id, returnEnvelopeOrder.returnEnvelopeOrder!.id)
    if (getreturnEnvelopeOrder.success) {
      console.log('Success!')
    } else {
      console.log('Error! Fetching the return envelope failed, and the output is:')
      console.log(getreturnEnvelopeOrder)
    }
  }

  console.log('listing the first page of 40 return envelopes orders...')
  const listReturnEnvelopeOrder = await client.returnEnvelopeOrder.list(returnEnvelope.returnEnvelope!.id)
  if (listReturnEnvelopeOrder.success) {
    console.log(`Success! The list contained ${listReturnEnvelopeOrder.returnEnvelopeOrderList!.data!.length} return envelope orders...`)
  } else {
    console.log('Error! Listing the return envelope orders failed, and the output is:')
    console.log(listReturnEnvelopeOrder)
  }

  console.log('Filling first return envelope order...')
  const fillReturnEnvelopeOrder = await client.returnEnvelopeOrder.fill(returnEnvelope.returnEnvelope!.id, returnEnvelopeOrder.returnEnvelopeOrder!.id)
  if (fillReturnEnvelopeOrder) {
    console.log(`Order was filled...`)
  } else {
    console.log('Error! Filling the return envelope order failed, and the output is:')
    console.log(fillReturnEnvelopeOrder)
  }

  console.log('Cancelling second return envelope order...')
  const deleteReturnEnvelopeOrder = await client.returnEnvelopeOrder.cancel(returnEnvelope.returnEnvelope!.id, returnEnvelopeOrder2.returnEnvelopeOrder!.id)
  if (deleteReturnEnvelopeOrder.success) {
    console.log(`Success! The order was cancelled...`)
  } else {
    console.log('Error! Cancelling the return envelope order failed, and the output is:')
    console.log(deleteReturnEnvelopeOrder)
  }

})()
