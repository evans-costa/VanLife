import { delay, http, HttpResponse } from "msw";
import { LoginApiRequest, LoginApiResponse } from "../types/api-responses";

const vans = [
  {
    id: "1",
    name: "Modest Explorer",
    price: 60,
    description:
      "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
    type: "simple",
    hostId: "123",
  },
  {
    id: "2",
    name: "Beach Bum",
    price: 80,
    description:
      "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
    type: "rugged",
    hostId: "123",
  },
  {
    id: "3",
    name: "Reliable Red",
    price: 100,
    description:
      "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
    type: "luxury",
    hostId: "123",
  },
  {
    id: "4",
    name: "Dreamfinder",
    price: 65,
    description:
      "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
    type: "simple",
    hostId: "123",
  },
  {
    id: "5",
    name: "The Cruiser",
    price: 120,
    description:
      "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
    type: "luxury",
    hostId: "123",
  },
  {
    id: "6",
    name: "Green Wonder",
    price: 70,
    description:
      "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
    imageUrl:
      "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
    type: "rugged",
    hostId: "123",
  },
];

const user = [{ id: "123", email: "b@b.com", password: "p123", name: "Bob" }];

export const handlers = [
  http.get("/api/vans", async () => {
    // return new HttpResponse("Error while fetching vans", { status: 404 });
    await delay();
    return HttpResponse.json({ vans }, { status: 200 });
  }),
  http.get("/api/vans/:id", async ({ params }) => {
    const { id } = params;

    const van = vans.filter((van) => van.id === id);

    await delay();
    return HttpResponse.json(van[0], { status: 200 });
  }),
  http.get("/api/host/vans", async () => {
    const hostVans = vans.filter((host) => host.hostId === "123");
    await delay();
    return HttpResponse.json({ vans: hostVans });
  }),
  http.get("/api/host/vans/:id", async ({ params }) => {
    const { id } = params;

    const hostVan = vans.filter((host) => host.hostId === "123");
    const van = hostVan.filter((van) => van.id === id);

    // return new HttpResponse("Error while fetching vans", { status: 404 });
    await delay();
    return HttpResponse.json(van[0]);
  }),

  http.post<Record<string, never>, LoginApiRequest, LoginApiResponse>(
    "/api/login",
    async ({ request }) => {
      const { email, password } = await request.json();

      const findUser = user.find(
        (user) => user.email === email && user.password === password,
      );

      await delay();

      if (findUser) {
        return HttpResponse.json(
          {
            message: "Login successful",
            user: { ...findUser, password: undefined },
          },
          { status: 200 },
        );
      } else {
        return HttpResponse.json(
          { message: "Invalid credentials" },
          { status: 401 },
        );
      }
    },
  ),
];
