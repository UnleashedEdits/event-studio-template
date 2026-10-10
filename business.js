// EDIT THIS FILE: all owner content, service switches, policies and brand tokens.
window.business = {
  name: 'Forme', descriptor: 'EVENT STUDIO', city: '[Your city]', serviceArea: '[Your city] & surrounding areas',
  headline: 'Thoughtfully made.\nUnforgettably felt.', intro: 'Event styling & production in',
  description: 'From the first idea to the final detail, a considered approach to spaces worth coming together for.',
  logo: '', email: '', phone: '', instagram: '', whatsapp: '', domain: '', published: false,
  theme: 'warm', colors: { warm: {background:'#f6f4ec', text:'#30382b', accent:'#dbe5aa'}, cinematic: {background:'#171d19', text:'#f4f1e6', accent:'#dbe5aa'} },
  hero: {src:'assets/room.webp', mobile:'assets/room-small.webp', alt:'Reception room with candlelit tables, greenery and floral arrangements'},
  detail: {src:'assets/detail.webp', alt:'Flowers, glassware and place settings on a wedding reception table'},
  team: {src:'', alt:'[Describe your real team at work]'},
  about: {title:'A personal approach.\nA shared vision.', text:'[Introduce the real people behind your business, how you approach events, and what clients can expect when working with you.]', approach:'We begin with your occasion, your space and what matters to you. The proposal brings the agreed details together, so you know what is included before moving forward.'},
  testimonials: [], // {quote, name, context}; only publish with permission.
  services: [
    {id:'planning', name:'Event planning', enabled:true, text:'Bring the moving parts into one considered plan.', deliverables:'[Confirm your scope: consultation, timeline, supplier coordination and on-the-day responsibilities.]', fit:'Weddings, corporate gatherings and private celebrations.'},
    {id:'floral', name:'Floral design', enabled:true, text:'Seasonal texture, thoughtful colour, a sense of occasion.', deliverables:'[Confirm arrangements offered: table flowers, ceremony pieces or installations; note seasonal substitutions.]', fit:'Ceremonies, receptions, dinners and intimate gatherings.'},
    {id:'lighting', name:'Lighting', enabled:true, text:'Set the atmosphere. Give every moment its presence.', deliverables:'[List available lighting, operator support, power needs and venue limitations.]', fit:'Receptions, presentations and celebrations, subject to venue suitability.'},
    {id:'backdrops', name:'Backdrops', enabled:true, text:'A focal point that brings the whole space together.', deliverables:'[Confirm backdrop options, dimensions, fixing methods and safety requirements.]', fit:'Ceremonies, brand events, photo moments and private parties.'},
    {id:'rentals', name:'Rentals', enabled:true, text:'The finishing pieces, selected for your setting.', deliverables:'[List rental inventory, quantities, delivery, handling and collection arrangements.]', fit:'Events needing coordinated signage or finishing pieces.'},
    {id:'sound', name:'Sound', enabled:false, text:'Audio shaped around your event.', deliverables:'[List sound equipment, microphones, operator support and venue limitations.]', fit:'Speeches, presentations and celebrations, subject to technical assessment.'},
    {id:'balloons', name:'Balloon installations', enabled:false, text:'Sculptural colour for a moment worth celebrating.', deliverables:'[Confirm designs, materials, anchoring, size limits and disposal arrangements.]', fit:'Private celebrations, launches and photo moments.'},
    {id:'signage', name:'Signage', enabled:false, text:'A welcoming detail, a clear direction.', deliverables:'[Confirm design, printing, materials, proofing and installation scope.]', fit:'Welcome signs, seating plans and event wayfinding.'},
    {id:'staging', name:'Staging', enabled:false, text:'A considered platform for your event.', deliverables:'[Confirm stage sizes, load limits, venue requirements and crew scope.]', fit:'Presentations and performances, subject to technical assessment.'}
  ],
  projects: [
    {title:'A gathering in bloom', type:'Wedding', services:['floral','planning','rentals'], location:'[Approved venue or city]', description:'[Describe this event and the precise services your team supplied.]', photos:['assets/room.webp','assets/detail.webp'], alt:['Candlelit wedding reception room with flowers','Floral table setting with glassware'], inspiration:true},
    {title:'An evening, illuminated', type:'Corporate', services:['lighting','backdrops'], location:'[Approved venue or city]', description:'[Describe the brief, the venue and your agreed production scope.]', photos:['assets/stage.webp','assets/room.webp'], alt:['Warm light illuminating a stage and curtain','Reception tables arranged in a finished event room'], inspiration:true},
    {title:'Little details. Big feeling.', type:'Private celebration', services:['floral','rentals','backdrops'], location:'[Approved venue or city]', description:'[Describe the celebration and the styling details your team created.]', photos:['assets/detail.webp','assets/room.webp'], alt:['Wedding table flowers and place settings','Floral reception room'], inspiration:true}
  ],
  process: [ ['Enquiry','Tell us your date, venue and what you have in mind.'], ['Consultation','Discuss the atmosphere, practical needs and scope.'], ['Proposal','Review the proposed services, inclusions and quote.'], ['Planning','Agree the details, access and event timeline.'], ['Setup & event','Install the agreed elements. Event support is included only when specified in your proposal.'], ['Collection','Arrange breakdown and collection according to the agreed venue timings.'] ],
  faqs: [
    ['How do I check availability?','Share your date, location and services needed. Availability is confirmed by the team after reviewing your enquiry.'],
    ['Which areas do you cover?','[Add your confirmed service area, travel arrangements and any location restrictions.]'],
    ['What access do you need at the venue?','[Add loading access, power, fixing permissions, lift dimensions and site-visit requirements for your services.]'],
    ['When will you set up and collect?','[Add setup lead times, collection arrangements and any out-of-hours terms.]'],
    ['How are equipment and rentals handled?','[Add handling rules, responsibility for damage, return conditions and crew requirements.]'],
    ['Is a deposit required?','[Add deposit amount or method, booking confirmation, payment schedule and cancellation policy.]'],
    ['Can you prepare a custom quote?','[Explain your quoting process, what information you need, quote validity and how changes are handled.]']
  ]
};
