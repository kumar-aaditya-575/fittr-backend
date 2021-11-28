const DEFAULT_PORT_NUM:number = 3000;

export default {
    port:DEFAULT_PORT_NUM,
    jwt: {
        secret: "randomString",
        accessExpirationMinutes: 300,
    }
};

