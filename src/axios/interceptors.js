const requestInterceptor = config => config;

const responseSuccessInterceptor = response => response.data;

const responseErrorInterceptor = (error) => {
	const response = error.response || error;
	return Promise.reject(response);
};

export {
	requestInterceptor,
	responseSuccessInterceptor,
	responseErrorInterceptor,
};
