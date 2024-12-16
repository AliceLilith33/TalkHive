// src/mocks/mock.js
import Mock from 'mockjs';

Mock.setup({
  timeout: '200-300', // 设置模拟延迟（可选）
});

// 模拟收藏列表接口
Mock.mock(/\/workspace\/favorites/, 'get', (options) => {
  // 获取用户 ID
  const userId = new URLSearchParams(options.url.split('?')[1]).get('id');
  if (!userId) {
    return Mock.mock({
      status: 400,
      message: '用户ID不可为空',
    });
  }

  // 模拟返回数据
  return Mock.mock({
    status: 200,
    data: [
      {
        message_list_name: 'message_table1',
        message_id: '1',
        type: 'message',
        object_name: '这是一条消息内容',
        sender_name: 'Alice',
        time: '10:00',
      },
      {
        message_list_name: 'note_table1',
        message_id: '2',
        type: 'note',
        object_name: '如何学习 Vue.js',
        sender_name: 'Bob',
        time: '14:00',
      },
      {
        message_list_name: 'code_table1',
        message_id: '3',
        type: 'code',
        object_name: '排序算法实现',
        sender_name: 'Charlie',
        time: '18:00',
      },
    ],
  });
});

// 模拟返回 DDL 列表
Mock.mock(/\/workspace\/ddl/, 'get', (options) => {
    const userId = new URLSearchParams(options.url.split('?')[1]).get('id');
    if (!userId) {
      return Mock.mock({
        status: 400,
        message: '用户ID不可为空',
      });
    }
  
    // 模拟 DDL 列表数据
    return Mock.mock({
      status: 200,
      data: [
        {
          task_id: '1',
          deadline: '2024-12-20 17:00',
          task_content: '完成前端开发任务',
        },
        {
          task_id: '2',
          deadline: '2024-12-22 12:00',
          task_content: '撰写项目需求文档',
        },
        {
          task_id: '3',
          deadline: '2024-12-25 09:00',
          task_content: '进行代码审查',
        },
      ],
    });
  });

// 模拟已完成的 DDL 列表
Mock.mock(/\/workspace\/ddl\/completed/, 'get', (options) => {
    const userId = new URLSearchParams(options.url.split('?')[1]).get('id');
    if (!userId) {
      return Mock.mock({
        status: 400,
        message: '用户ID不可为空',
      });
    }
  
    // 模拟已完成的 DDL 列表数据
    return Mock.mock({
      status: 200,
      data: [
        {
          task_id: '4',
          deadline: '2024-12-15 09:00',
          task_content: '完成数据库设计',
        },
        {
          task_id: '5',
          deadline: '2024-12-18 18:00',
          task_content: '完成后台 API 开发',
        },
      ],
    });
  });