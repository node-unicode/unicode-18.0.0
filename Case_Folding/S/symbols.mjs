import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3RORKCUBCE4btM/G5EcRc33HfEDQEVd59LlZll8QJz78AJ8AiWTYdf0MH8Y1mSPkNR8o7EVpakSV2UpEmBakBFqgmVqBZUptpQhepADtWFqlQPqlFTqE/NoAE1h4aUD7nUAhpRAeRRITSmImhCHaAldYRW1AlaU2copjS0oS7QlrpCO+oG7akX9MhlUMmwmXFFyYenm/iPO4GVyVeZdkRJpvN+3yDx+C/7B8OR4fO+AQAA', 'base64'))));
