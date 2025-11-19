// src/config/booking.ts

// Generic “all services” booking link for hero/about:
export const DEFAULT_BOOKING_URL =
  "https://book.squareup.com/appointments/wa99y87slsquot/location/L7MDG562W78VE";

// Specific services if you want them typed:
export const BOOKING_SERVICES = {
  initial30:
    "https://book.squareup.com/appointments/wa99y87slsquot/location/L7MDG562W78VE/services/Y2CHM76YN75AMJ36ZQXE7A5S",
  initial60:
    "https://book.squareup.com/appointments/wa99y87slsquot/location/L7MDG562W78VE/services?buttonTextColor=ffffff&color=000000&locale=en-AU&referrer=so&service_id=NJTOV7XKAM34KUTACX7VI3QK",
  returning30:
    "https://book.squareup.com/appointments/wa99y87slsquot/location/L7MDG562W78VE/services/VW577TFJ4BFLKT2C7L2NKSEG",
  returning60:
    "https://book.squareup.com/appointments/wa99y87slsquot/location/L7MDG562W78VE/services/C2ULBKSZUUTBBX4K6ACKDKRT",
  junior45:
    "https://book.squareup.com/appointments/wa99y87slsquot/location/L7MDG562W78VE/services/37OLVYN7H62B35VE24F6SKWD",
} as const;
