var volunteers = [
  {id:1, name: "Dani Michelle",
    image: "path/to/image.jpg",
    phone: "(917) 555-1212"},
  {id: 2, name: "Laura Becker",
      image: "path/to/image.jpg",
      phone: "(917) 555-1312"},
  {id: 3, name: "Bryan White",
      image: "path/to/image.jpg",
      phone: "(917) 555-1213"}
];

var organizer = {id: 10, name: "Gary Chan", organization: "Red Hook Organizer", phone: "(917) 555-2323"};

var team = {id: 1, volunteers: [1, 2, 3], organizer_id: 10};

var households = [
  {id: 1, name: "Mrs Lois", apartment: "5E", address: "15 Mill Rd. Brooklyn, NY 11216", visited: false },
  {id: 2, name: "Mr Frank W. Abignale", apartment: "6E", address: "17 Mill Rd. Brooklyn, NY 11216", visited: false },
  {id: 3, name: "Mr Reginald Moulding", apartment: "7B", address: "16 Mill Rd. Brooklyn, NY 11216", visited: false },
  {id: 4, name: "Mrs Abigail Smithers", apartment: "5D", address: "19 Mill Rd. Brooklyn, NY 11216", visited: false },
  {id: 5, name: "Mr Eric Weiss", apartment: "5G", address: "15 Mill Rd. Brooklyn, NY 11216", visited: false },
  {id: 6, name: "Mrs Theodor", apartment: "5J", address: "15 Mill Rd. Brooklyn, NY 11216", visited: false },
  {id: 7, name: "Mr Geisel", apartment: "5L", address: "15 Mill Rd. Brooklyn, NY 11216", visited: false },
  {id: 8, name: "Mr Smith", apartment: "5M", address: "15 Mill Rd. Brooklyn, NY 11216", visited: false },
  {id: 9, name: "Mrs Jones", apartment: "5Y", address: "15 Mill Rd. Brooklyn, NY 11216", visited: false }
];

var urls = [{CPR_instructions: "http://www.cpr.com"}];

var surveys = [
  {id: 56, team_id: 1, household_id: 1, urgency: urgency, utilities: {/*utilities*/}, supplies: {/*supplies*/}, notes: notes}
];
