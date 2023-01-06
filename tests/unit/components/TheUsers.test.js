import axios from "axios";
import { render, screen } from "vue";
import { RouterLinkStub } from "@vue/test-utils";

import TheUsers from "@/components/TheUsers.vue";

vi.mock("axios");

describe("TheUsers", () => {
  it("fetches the list users", async () => {
    render(TheUsers, {
      globals: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    await axios.get("https://randomuser.me/api/?results=10");
    expect(axios.get).toHaveBeenCalledWith(
      "https://randomuser.me/api/?results=10"
    );
    q;
  });

  it("extracts users from response", async () => {
    render(TheUsers, {
      globals: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Oderinde Emmanuel",
        },
      ],
    });

    const users = await axios.get();
    console.log(users);
    expect(users).toEqual({ data: [{ id: 1, name: "Oderinde Emmanuel" }] });
  });
});
