import { RoomsController } from "./controller/RoomsController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: RoomsController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: RoomsController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: RoomsController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: RoomsController,
    action: "remove"
}]