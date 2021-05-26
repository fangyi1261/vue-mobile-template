import ComApi from './index';

class Mock {
  mockMap = new Map();

  mock(url, callback) {
    this.mockMap.set(url, callback);
  }

  emit(url, params) {
    if (this.mockMap.has(url)) {
      return this.mockMap.get(url)(params);
    }
    return {
      responseCode: '000001',
      responseMsg: '没有对应的mock接口'
    };
  }
}

export const mock = new Mock();

if (process.env.NODE_ENV !== 'production') {
  mock.mock(ComApi.getMenu, function() {
    return {
      status: 200,
      statusText: '查询成功',
      data: {
        status: '00',
        message: '',
        result: []
      }
    };
  });
}
