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

  const one = await client.returnEnvelope.create(contact.contact!.id)
  if (one.success) {
    console.log('Success!')
  } else {
    console.log('Error! Creating the return envelope failed, and the output is:')
    console.log(one)
  }

  if (one.success) {
    console.log('fetching a single return envelope...')
    const two = await client.returnEnvelope.get(one.returnEnvelope!.id)
    if (two.success) {
      console.log('Success!')
    } else {
      console.log('Error! Fetching the return envelope failed, and the output is:')
      console.log(two)
    }
  }

  console.log('listing the first page of 40 return envelopes...')
  const tre = await client.returnEnvelope.list()
  if (tre.success) {
    console.log(`Success! The list contained ${tre.returnEnvelopeList!.data!.length} return envelopes...`)
  } else {
    console.log('Error! Listing the return envelopes failed, and the output is:')
    console.log(tre)
  }

})()
