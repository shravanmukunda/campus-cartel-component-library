import { jsx as t, jsxs as g } from "react/jsx-runtime";
import { Button as P, Input as i, Card as d, Modal as k, Form as o, Table as a, Drawer as I, Statistic as S, Pagination as T, Menu as c, Badge as b, DatePicker as n, Select as l, Layout as u, Avatar as O, Tabs as f } from "antd";
import { Col as re, Divider as oe, Empty as ae, Result as ne, Row as se, Skeleton as ie, Space as ce, Spin as ue } from "antd";
import { ArrowUpOutlined as C, ArrowDownOutlined as E } from "@ant-design/icons";
export * from "@ant-design/icons";
const F = ({
  label: e,
  children: r,
  ...s
}) => /* @__PURE__ */ t(P, { ...s, children: e || r }), L = ({
  label: e,
  error: r,
  ...s
}) => /* @__PURE__ */ g("div", { style: { marginBottom: "16px" }, children: [
  e && /* @__PURE__ */ t("label", { style: { display: "block", marginBottom: "8px", fontWeight: 500 }, children: e }),
  /* @__PURE__ */ t(i, { ...s, status: r ? "error" : void 0 }),
  r && /* @__PURE__ */ t("div", { style: { color: "#ff4d4f", fontSize: "14px", marginTop: "4px" }, children: r })
] }), G = Object.assign(L, {
  Password: i.Password,
  TextArea: i.TextArea,
  Search: i.Search,
  Group: i.Group
}), B = ({ children: e, ...r }) => /* @__PURE__ */ t(d, { ...r, children: e }), R = ({ children: e, ...r }) => /* @__PURE__ */ t(k, { ...r, children: e }), $ = ({ children: e, ...r }) => /* @__PURE__ */ t(o, { ...r, children: e }), _ = Object.assign($, {
  Item: o.Item,
  List: o.List,
  ErrorList: o.ErrorList,
  Provider: o.Provider,
  useForm: o.useForm,
  useFormInstance: o.useFormInstance,
  useWatch: o.useWatch
}), v = (e) => /* @__PURE__ */ t(a, { ...e }), H = Object.assign(v, {
  Column: a.Column,
  ColumnGroup: a.ColumnGroup,
  Summary: a.Summary,
  SELECTION_ALL: a.SELECTION_ALL,
  SELECTION_INVERT: a.SELECTION_INVERT,
  SELECTION_NONE: a.SELECTION_NONE
}), Q = ({ children: e, ...r }) => /* @__PURE__ */ t(I, { ...r, children: e }), y = ({
  trend: e,
  showCard: r = !1,
  cardTitle: s,
  ...p
}) => {
  const m = /* @__PURE__ */ t(
    S,
    {
      ...p,
      prefix: e === "up" ? /* @__PURE__ */ t(C, { style: { color: "#3f8600" } }) : e === "down" ? /* @__PURE__ */ t(E, { style: { color: "#cf1322" } }) : p.prefix,
      valueStyle: {
        color: e === "up" ? "#3f8600" : e === "down" ? "#cf1322" : void 0,
        ...p.valueStyle
      }
    }
  );
  return r ? /* @__PURE__ */ t(d, { bordered: !1, title: s, children: m }) : m;
}, V = Object.assign(y, {
  Countdown: S.Countdown
}), Y = (e) => /* @__PURE__ */ t(T, { ...e }), W = (e) => /* @__PURE__ */ t(c, { ...e }), z = Object.assign(W, {
  Item: c.Item,
  SubMenu: c.SubMenu,
  ItemGroup: c.ItemGroup,
  Divider: c.Divider
}), w = ({ children: e, ...r }) => /* @__PURE__ */ t(b, { ...r, children: e }), U = Object.assign(w, {
  Ribbon: b.Ribbon
}), x = (e) => /* @__PURE__ */ t(n, { ...e }), q = Object.assign(x, {
  RangePicker: n.RangePicker,
  TimePicker: n.TimePicker,
  WeekPicker: n.WeekPicker,
  MonthPicker: n.MonthPicker,
  QuarterPicker: n.QuarterPicker,
  YearPicker: n.YearPicker
}), h = (e) => /* @__PURE__ */ t(l, { ...e }), J = Object.assign(h, {
  Option: l.Option,
  OptGroup: l.OptGroup
}), j = ({ children: e, ...r }) => /* @__PURE__ */ t(u, { ...r, children: e }), K = Object.assign(j, {
  Header: u.Header,
  Content: u.Content,
  Footer: u.Footer,
  Sider: u.Sider
}), N = (e) => /* @__PURE__ */ t(O, { ...e }), X = Object.assign(N, {
  Group: O.Group
}), Z = (e) => /* @__PURE__ */ t(f, { ...e });
export {
  X as Avatar,
  U as Badge,
  F as Button,
  B as Card,
  re as Col,
  q as DatePicker,
  oe as Divider,
  Q as Drawer,
  ae as Empty,
  _ as Form,
  G as Input,
  K as Layout,
  z as Menu,
  R as Modal,
  Y as Pagination,
  ne as Result,
  se as Row,
  J as Select,
  ie as Skeleton,
  ce as Space,
  ue as Spin,
  V as Statistic,
  H as Table,
  Z as Tabs
};
//# sourceMappingURL=index.es.js.map
