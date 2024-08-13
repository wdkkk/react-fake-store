import type { Meta, StoryObj } from "@storybook/react";

import Account from "./Account";

const meta = {
  component: Account,
} satisfies Meta<typeof Account>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      address: {
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
        city: "kilcoole",
        street: "new road",
        number: 7682,
        zipcode: "12926-3874",
      },
      id: 1,
      email: "john@gmail.com",
      name: {
        firstname: "john",
        lastname: "doe",
      },
      phone: "1-570-236-7033",
      __v: 0,
    },
  },
};
