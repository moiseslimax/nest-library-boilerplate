export default () => {
    process.env = {
        NODE_ENV: 'develop',
        HTTP_PORT: '3000',
        TYPEORM_CONNECTION: 'mysql',
        TYPEORM_USERNAME: 'root',
        TYPEORM_PASSWORD: 'root',
        TYPEORM_HOST: 'localhost',
        TYPEORM_PORT: '3306',
        TYPEORM_DATABASE: 'library',
    }
};
