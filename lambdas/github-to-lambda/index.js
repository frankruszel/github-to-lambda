import * as lodash from 'lodash';

export const handler = async () => {
  const max = 5;
  const val = lodash.random(max);
  const response = {
    statusCode: 200,
    body: `01: my random value (max: ${max}): ${val}`,
  };
  return response;
};