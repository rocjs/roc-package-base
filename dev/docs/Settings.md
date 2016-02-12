

# Build

| Name    | Description                                                                                             | Path          | CLI option      | Default   | Type       | Required |
| ------- | ------------------------------------------------------------------------------------------------------- | ------------- | --------------- | --------- | ---------- | -------- |
| input   | The entry point for the build.                                                                          | build.input   | --build-input   | `null`    | `Filepath` | No       |
| output  | The output directory for the build.                                                                     | build.output  | --build-output  | `null`    | `Filepath` | No       |
| targets | For what targets the code should be built for.                                                          | build.targets | --build-targets | `null`    | `Unknown`  | No       |

# Dev

| Name    | Description                                                                                             | Path          | CLI option      | Default   | Type       | Required |
| ------- | ------------------------------------------------------------------------------------------------------- | ------------- | --------------- | --------- | ---------- | -------- |
| debug   | Filter for debug messages that should be shown during development, see https://npmjs.com/package/debug. | dev.debug     | --dev-debug     | `"roc:*"` | `String`   | No       |

