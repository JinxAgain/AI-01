import React from 'react';
import { FiBell, FiCalendar, FiActivity, FiUsers, FiChevronRight } from 'react-icons/fi';

const kpiCards = [
  { title: '活跃项目', value: '12', change: '+3 本周', accent: 'accent-1' },
  { title: '按期率', value: '87%', change: '+5% QoQ', accent: 'accent-2' },
  { title: '风险项目', value: '3', change: '2 个高风险', accent: 'accent-3' },
  { title: '通知命中率', value: '92%', change: '降低噪音 18%', accent: 'accent-4' },
];

const timeline = [
  { time: 'Oct 10', title: 'AI 入门训练营', status: 'completed' },
  { time: 'Oct 14', title: '支付系统升级', status: 'active' },
  { time: 'Oct 20', title: '营销网站发布', status: 'warning' },
  { time: 'Oct 28', title: '季度复盘', status: 'upcoming' },
];

const kanbanColumns = [
  {
    title: '进行中',
    items: [
      { name: 'AI 预警模型调优', owner: '刘洋', progress: 65 },
      { name: '移动端自适应优化', owner: '张敏', progress: 45 },
    ],
  },
  {
    title: '待复盘',
    items: [
      { name: '数据指标看板升级', owner: '王琪', progress: 100 },
    ],
  },
];

const alerts = [
  { type: '临期', message: '「智慧园区项目」核心集成任务距离截止 2 天', owner: '负责人：李涛', level: 'warn' },
  { type: '阻塞', message: '「支付系统升级」依赖接口验收未完成', owner: '指派：运营团队', level: 'critical' },
];

const aiInsights = [
  'AI 预测：10 月 20 日发布存在 35% 延期概率，建议提前协调设计资源。',
  '按期率提升主要来源于「AI 增强计划」的任务拆解深度提升 20%。',
];

function App() {
  return (
    <div className="page-container">
      <header className="header">
        <div className="brand">
          <div className="logo">PM</div>
          <div>
            <h1>项目任务管理控制台</h1>
            <p>串联计划 · 执行 · 可视化 · 预警 · 复盘</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="ghost-button">
            <FiCalendar /> 计划排期
          </button>
          <button className="ghost-button">
            <FiUsers /> 团队协作
          </button>
          <button className="primary-button">
            <FiActivity /> 创建项目
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>实时洞察项目健康度</h2>
          <p>
            基于 PRD 的核心需求，为领导、项目经理与成员提供统一的科技风面板。支持进度标注、依赖管理、风险预警以及 AI
            智能洞察，可在 PC 与移动端自适应展示。
          </p>
          <div className="hero-actions">
            <button className="primary-button">快速创建任务</button>
            <button className="ghost-button secondary">查看演示</button>
          </div>
          <div className="hero-stats">
            <div>
              <span>3.2h</span>
              <p>平均任务完成时间</p>
            </div>
            <div>
              <span>92%</span>
              <p>通知响应效率</p>
            </div>
            <div>
              <span>18+</span>
              <p>跨部门协同项目</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glass-panel">
            <h3>项目健康总览</h3>
            <div className="sparkline" aria-hidden="true" />
            <ul>
              <li>
                <span>关键路径可视化</span>
                <FiChevronRight />
              </li>
              <li>
                <span>AI 延期预测</span>
                <FiChevronRight />
              </li>
              <li>
                <span>多维报表导出</span>
                <FiChevronRight />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid-section">
        <div className="kpi-grid">
          {kpiCards.map((card) => (
            <article key={card.title} className={`kpi-card ${card.accent}`}>
              <h4>{card.title}</h4>
              <div className="kpi-value">{card.value}</div>
              <p>{card.change}</p>
            </article>
          ))}
        </div>

        <div className="timeline">
          <header>
            <h3>里程碑进度</h3>
            <button className="ghost-button">
              <FiCalendar /> 查看日历
            </button>
          </header>
          <ul>
            {timeline.map((item) => (
              <li key={item.title} className={item.status}>
                <span className="dot" />
                <div>
                  <div className="time">{item.time}</div>
                  <div className="title">{item.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="kanban">
          <header>
            <h3>任务面板</h3>
            <span className="sub">按状态聚合实时同步</span>
          </header>
          <div className="kanban-columns">
            {kanbanColumns.map((column) => (
              <div key={column.title} className="kanban-column">
                <h4>{column.title}</h4>
                {column.items.map((item) => (
                  <div key={item.name} className="kanban-card">
                    <div className="card-title">{item.name}</div>
                    <div className="card-meta">{item.owner}</div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="alerts">
          <header>
            <h3>
              <FiBell /> 智能预警
            </h3>
            <span className="sub">自动推送至负责人及团队成员</span>
          </header>
          {alerts.map((alert, index) => (
            <article key={alert.message} className={`alert-card ${alert.level}`}>
              <div className="alert-header">
                <span>{alert.type}</span>
                <span>#{index + 1}</span>
              </div>
              <p>{alert.message}</p>
              <div className="alert-owner">{alert.owner}</div>
            </article>
          ))}
        </div>

        <div className="ai-insights">
          <header>
            <h3>
              <FiActivity /> AI 洞察
            </h3>
            <span className="sub">根据历史数据与上下文预测风险</span>
          </header>
          <ul>
            {aiInsights.map((insight) => (
              <li key={insight}>{insight}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Project Management Intelligence Suite. Inspired by PRD 要求的全链路管理。</p>
      </footer>
    </div>
  );
}

export default App;
