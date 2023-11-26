const liveData = [
    {
      name: "Lilly Dole",
      status: "Open",
      number: "292-292-2983",
      emergency: "Abuse",
      priority: 2,
      transcript: `Caller: Theres a big accident on the road.
        Dispatcher: Okay, stay calm. Can you tell me your location?
        Caller: I'm on Airport road right now.
        Dispatcher: Okay, can I get your full name
        Caller: Lilly Dole.
        Dispatcher: and whats your phone number just in case we are disconnected
        Caller: 292-292-2983.
        Dispatcher: Tell me what you see?
        Caller: theres been a car crash with two black cars.
        Dispatcher: Is eveyone fine?
        Caller: its not too bad but its blocking the major intersection.
        Dispatcher: Don't worry, help is on the way. I'm going to end the call to coordinate dispatch efforts, but you should hear back from 9-1-1 officers really soon.`,
      location: "Airport road",
      id: `efjejoqokwjqfjwq`,
    },
    {
      name: "Lucas Wang",
      status: "Open",
      number: "372-282-2322",
      emergency: "Fire",
      priority: 1,
      transcript: `Caller: I just saw a car accident on the road.
        Dispatcher: Okay, stay calm. Can you tell me your location?
        Caller: Yes its on Airport road .
        Dispatcher: Okay, can I get your full name
        Caller: Bruce Wayne.
        Dispatcher: and whats your phone number just in case we are disconnected
        Caller: 372-282-2839.
        Dispatcher: Tell me what you see?
        Caller: I was just driving along when i saw a huge crash between 2 cars. theres a mom and a girl in one car and a guy in the other.
        Dispatcher: Is eveyone fine?
        Caller: Yeah everyone looks fine but its blocking the major intersection.
        Dispatcher: Don't worry, help is on the way. I'm going to end the call to coordinate dispatch efforts, but you should hear back from 9-1-1 officers really soon.`,
      location: "Airport road",
      id: `efnjffejwnwjnfj`,
    },
  ];
  
  const automatedData = [
    {
      name: "Bob Marley",
      status: "Open",
      number: "292-292-2983",
      emergency: "Unknown",
      priority: 3,
      transcript: `Caller: I'm lost..
        Dispatcher: Okay, stay calm. Can you tell me your location?
        Caller: Really not sure.
        Dispatcher: Okay, can I get your full name
        Caller: Bob Marley.
        Dispatcher: and whats your phone number just in case we are disconnected
        Caller: 292-292-2983.
        Dispatcher: Tell me what you see?
        Caller: I'm in a dark forest.
        Dispatcher: Are you okay?
        Caller: It's not too bad but I don't know where I am.
        Dispatcher: Don't worry, help is on the way. I'm going to end the call to coordinate dispatch efforts, but you should hear back from 9-1-1 officers really soon.`,
      location: "Airport road",
      id: `efjejbwwfwfwnoqokq`,
    },
  
    {
      name: "Rachel Green",
      status: "Open",
      number: "1111 666 5963",
      emergency: "Being Followed",
      priority: 1,
      transcript: `Caller: Hello I'm lost in a forest.
        Dispatcher: Okay, stay calm. Can you estimate your location?
        Caller: Yeah, somewhere near Green ill.
        Dispatcher: Okay, can I get your full name
        Caller: Yeah, it's Rachel Green.
        Dispatcher: and whats your phone number just in case we are disconnected
        Caller: 1, 1, 1 6 6, 6 5, 9 6 3.
        Dispatcher: When did you get lost?
        Caller: About 5 hours ago.
        Dispatcher: Okay stay on the line, a search and rescue team is dispatched.`,
      location: "Green Hill",
      id: "vghvggwdwwwhvgh",
    },
    {
      name: "Tom Holland",
      status: "Open",
      number: "444-333-2929",
      emergency: "IKEA",
      priority: 2,
      transcript: `Caller: I need help im in IKEA.
        Dispatcher: Okay, stay calm. Are you safe?
        Caller: Yeah, I'm on Bay and Wellington.
        Dispatcher: Okay, can I get your full name
        Caller: Yeah, it's Tom Holland.
        Dispatcher: and whats your phone number just in case we are disconnected
        Caller: 444-333-2929.
        Dispatcher: Who is with you?
        Caller: Its me and my daughter.
        Dispatcher: Is anyone hurt?
        Caller: No no ones injured but we are stuck in the IKEA.
        Dispatcher: Don't worry, help is on the way. I'm going to end the call to coordinate dispatch efforts, but you should hear back from 9-1-1 officers really soon.`,
      location: "IKEA Bay and Wellington",
      id: `juhuiwdwhiegwojij`,
    },

  ];
  
  export { liveData, automatedData };