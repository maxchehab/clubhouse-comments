import { NextApiResponse } from "next";
import { Validator } from "../../../common/util/validator.util";
import { CallbackDTO } from "./callback.dto";

import { Lambda, Get, Res, Query } from "9ight";

class Auth {
  @Get("/login")
  login(@Res() res: NextApiResponse) {
    res.writeHead(302, {
      location: `https://github.com/login/oauth/authorize?scope=read:org&client_id=${process.env.GITHUB_CLIENT_ID}`
    });
    res.send(null);
  }

  @Get("/callback")
  callback(@Query(Validator(CallbackDTO)) query: CallbackDTO) {
    return { query };
  }
}

export default Lambda(Auth);
