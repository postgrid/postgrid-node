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
  if (returnEnvelope.success) {
    console.log('Success!')
  } else {
    console.log('Error! Creating the return envelope failed, and the output is:')
    console.log(returnEnvelope)
  }

  if (returnEnvelope.success) {
    console.log('fetching a single return envelope...')
    const getReturnEnvelope = await client.returnEnvelope.get(returnEnvelope.returnEnvelope!.id)
    if (getReturnEnvelope.success) {
      console.log('Success!')
    } else {
      console.log('Error! Fetching the return envelope failed, and the output is:')
      console.log(getReturnEnvelope)
    }
  }

  console.log('listing the first page of 40 return envelopes...')
  const listReturnEnvelope = await client.returnEnvelope.list()
  if (listReturnEnvelope.success) {
    console.log(`Success! The list contained ${listReturnEnvelope.returnEnvelopeList!.data!.length} return envelopes...`)
  } else {
    console.log('Error! Listing the return envelopes failed, and the output is:')
    console.log(listReturnEnvelope)
  }

})()
