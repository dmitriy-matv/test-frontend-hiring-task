export interface IDevice {
  attributes: {
    connected_at: string;
    firmware_version: string;
    model_number: string;
    name: string;
    power_source: string;
    programming_code: string;
    serial_number: string;
    state: string;
  };
  id: string;
  type: "string";
}
