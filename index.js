import * as lodash from 'lodash';

export const handler = async () => {
  const max = 20;
  const val = lodash.random(max);
  const response = {
    statusCode: 200,
    body: `my random value (max: ${max}): ${val}`,
  };
  return response;
};