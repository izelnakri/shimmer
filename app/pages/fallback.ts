import type { App, Owner, Services } from "@shimmer/core";
import { def, fragment, text } from "@shimmer/dsl";
import { Nav } from "./nav";
import { page, PageHooks, RenderOptions, StaticOptions } from "./page";
import { el } from "./utils";

interface TutorialState {}

export class TutorialPage implements PageHooks<TutorialState> {
  construct(_owner: Owner<Services>): TutorialState {
    return {};
  }
  render(
    _state: TutorialState,
    { owner }: StaticOptions,
    { cursor }: RenderOptions
  ): App {
    let doc = owner.service("doc");

    return doc.render(Template(undefined, owner.$), cursor);
  }
}

export const Main = page(() => new TutorialPage());

const Template = def(({ $ }) => {
  return fragment($(Nav), el("div", { class: "fallback" }, $(Page)));
});

const Page = def(() => fragment(text("hello")));
