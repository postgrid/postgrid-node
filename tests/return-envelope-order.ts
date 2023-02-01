import { PostGrid } from '../src/index'

(async () => {
  const client = new PostGrid({
    mail: "test_sk_jRRZRwJPXviW1UszTemxr1",
    addr: "live_sk_xoTVy7K1WDk8YnuwvWDAs1",
  })
  console.log('creating a single Contact...')
  const who = {
    addressLine1: '2929 Eagledale Dr',
    city: 'Indianapolis',
    provinceOrState: 'IN',
    postalOrZip: '46224',
    countryCode: 'US',
    firstName: 'Jeff',
    lastName: 'Jeff',
    email: 'Jeff@Jeff.com',
    phoneNumber: '317-555-1212',
    companyName: 'Jeff',
    jobTitle: 'Jeff',
  }
  const contact = await client.contact.create(who)
  console.log('creating a single return envelope...')
  const returnEnvelope = await client.returnEnvelope.create(contact.contact!.id)
  console.log('creating a single return envelope order...')
  const one = await client.returnEnvelopeOrder.create(returnEnvelope.returnEnvelope!.id, 5000, "test")

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

})()
