import { merge } from 'webpack-merge';
import { Configuration, EnvironmentPlugin } from 'webpack';

export default function (config: Configuration): Configuration {
  return merge<Configuration>(config, {
    plugins: [new EnvironmentPlugin({ WEBPACK: true })],
  });
}
