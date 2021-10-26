import { icon } from "../icons";

export const devices = {
  name: "isw4",
  frendlyName: "4ch realay 230v wifi board",
  location: "big room",
  ip: "192.168.0.13",
  type: "relay",
  producer: "iSter interactive studio",
  controls: {
    relays: [
      {
        name: "światło kanapa",
        on: "/?led_1_on",
        off: "/?led_1_off",
        state: false,
        type: icon.faLightbulb,
      },
      {
        name: "światło biurko",
        on: "/?led_2_on",
        off: "/?led_2_off",
        type: icon.faLightbulb,
        state: false,
      },
      {
        name: "światło kuchnia",
        on: "/?led_3_on",
        off: "/?led_3_off",
        type: icon.faLightbulb,
        state: false,
      },
      {
        name: "telewizor",
        on: "/?led_4_on",
        off: "/?led_4_off",
        type: icon.faTv,
        state: false,
      },
    ],
  },
};
