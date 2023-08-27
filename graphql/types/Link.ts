import { builder } from "../builder";

builder.prismaObject("Link", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    description: t.exposeString("description"),
    url: t.exposeString("url"),
    imageUrl: t.exposeString("imageUrl"),
    category: t.exposeString("category"),
    users: t.relation("users"),
  }),
});

// Defining queries using pothos
builder.queryField(
  "links",
  (t) =>
    // t.prismaField({
    t.prismaConnection({
      type: "Link",
      cursor: "id",
      resolve: (query, _parent, _args, _ctx, _info) =>
        prisma.link.findMany({ ...query }),
    })
  // })
);
