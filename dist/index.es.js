import { jsx as e, jsxs as g } from "react/jsx-runtime";
import { Button as P, Input as c, Card as d, Modal as k, Form as o, Table as a, Drawer as C, Statistic as S, Pagination as f, Menu as u, Badge as b, DatePicker as s, Select as m, Layout as p, Avatar as O, Tabs as I } from "antd";
import { Col as st, Divider as it, Empty as ct, Result as ut, Row as pt, Skeleton as lt, Space as mt, Spin as dt } from "antd";
import { ArrowUpOutlined as T, ArrowDownOutlined as E } from "@ant-design/icons";
export * from "@ant-design/icons";
import L from "react-apexcharts";
const R = ({
  label: t,
  children: r,
  ...n
}) => /* @__PURE__ */ e(P, { ...n, children: t || r }), h = ({
  label: t,
  error: r,
  ...n
}) => /* @__PURE__ */ g("div", { style: { marginBottom: "16px" }, children: [
  t && /* @__PURE__ */ e("label", { style: { display: "block", marginBottom: "8px", fontWeight: 500 }, children: t }),
  /* @__PURE__ */ e(c, { ...n, status: r ? "error" : void 0 }),
  r && /* @__PURE__ */ e("div", { style: { color: "#ff4d4f", fontSize: "14px", marginTop: "4px" }, children: r })
] }), _ = Object.assign(h, {
  Password: c.Password,
  TextArea: c.TextArea,
  Search: c.Search,
  Group: c.Group
}), V = ({ children: t, ...r }) => /* @__PURE__ */ e(d, { ...r, children: t }), H = ({ children: t, ...r }) => /* @__PURE__ */ e(k, { ...r, children: t }), y = ({ children: t, ...r }) => /* @__PURE__ */ e(o, { ...r, children: t }), Q = Object.assign(y, {
  Item: o.Item,
  List: o.List,
  ErrorList: o.ErrorList,
  Provider: o.Provider,
  useForm: o.useForm,
  useFormInstance: o.useFormInstance,
  useWatch: o.useWatch
}), v = (t) => /* @__PURE__ */ e(a, { ...t }), Y = Object.assign(v, {
  Column: a.Column,
  ColumnGroup: a.ColumnGroup,
  Summary: a.Summary,
  SELECTION_ALL: a.SELECTION_ALL,
  SELECTION_INVERT: a.SELECTION_INVERT,
  SELECTION_NONE: a.SELECTION_NONE
}), z = ({ children: t, ...r }) => /* @__PURE__ */ e(C, { ...r, children: t }), x = ({
  trend: t,
  showCard: r = !1,
  cardTitle: n,
  ...i
}) => {
  const l = /* @__PURE__ */ e(
    S,
    {
      ...i,
      prefix: t === "up" ? /* @__PURE__ */ e(T, { style: { color: "#3f8600" } }) : t === "down" ? /* @__PURE__ */ e(E, { style: { color: "#cf1322" } }) : i.prefix,
      valueStyle: {
        color: t === "up" ? "#3f8600" : t === "down" ? "#cf1322" : void 0,
        ...i.valueStyle
      }
    }
  );
  return r ? /* @__PURE__ */ e(d, { bordered: !1, title: n, children: l }) : l;
}, U = Object.assign(x, {
  Countdown: S.Countdown
}), q = (t) => /* @__PURE__ */ e(f, { ...t }), $ = (t) => /* @__PURE__ */ e(u, { ...t }), J = Object.assign($, {
  Item: u.Item,
  SubMenu: u.SubMenu,
  ItemGroup: u.ItemGroup,
  Divider: u.Divider
}), W = ({ children: t, ...r }) => /* @__PURE__ */ e(b, { ...r, children: t }), K = Object.assign(W, {
  Ribbon: b.Ribbon
}), w = (t) => /* @__PURE__ */ e(s, { ...t }), X = Object.assign(w, {
  RangePicker: s.RangePicker,
  TimePicker: s.TimePicker,
  WeekPicker: s.WeekPicker,
  MonthPicker: s.MonthPicker,
  QuarterPicker: s.QuarterPicker,
  YearPicker: s.YearPicker
}), j = (t) => /* @__PURE__ */ e(m, { ...t }), Z = Object.assign(j, {
  Option: m.Option,
  OptGroup: m.OptGroup
}), N = ({ children: t, ...r }) => /* @__PURE__ */ e(p, { ...r, children: t }), tt = Object.assign(N, {
  Header: p.Header,
  Content: p.Content,
  Footer: p.Footer,
  Sider: p.Sider
}), D = (t) => /* @__PURE__ */ e(O, { ...t }), et = Object.assign(D, {
  Group: O.Group
}), rt = (t) => /* @__PURE__ */ e(I, { ...t }), ot = ({
  title: t,
  data: r,
  categories: n,
  height: i = 350
}) => /* @__PURE__ */ e(L, { options: {
  chart: {
    type: "line",
    toolbar: { show: !0 }
  },
  title: { text: t },
  xaxis: { categories: n },
  stroke: { curve: "smooth" }
}, series: [{ name: "Value", data: r }], type: "line", height: i });
export {
  et as Avatar,
  K as Badge,
  R as Button,
  V as Card,
  st as Col,
  X as DatePicker,
  it as Divider,
  z as Drawer,
  ct as Empty,
  Q as Form,
  _ as Input,
  tt as Layout,
  ot as LineChart,
  J as Menu,
  H as Modal,
  q as Pagination,
  ut as Result,
  pt as Row,
  Z as Select,
  lt as Skeleton,
  mt as Space,
  dt as Spin,
  U as Statistic,
  Y as Table,
  rt as Tabs
};
//# sourceMappingURL=index.es.js.map
