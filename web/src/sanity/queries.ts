import { defineQuery } from 'next-sanity'

export const SERVICE_QUERY = defineQuery(
  `*[_type == 'service']{_id, title, image, tags, description, cta, href}`
)

export const CATEGORY_QUERY = defineQuery(
  `*[_type == "category"] | order(title asc){
    _id,
    slug,
    title,
    "count": count(*[_type == "rental" && references(^._id)]),
    "cover": *[_type == "rental" && references(^._id) && defined(image.image)][0].image
  }`
)

export const CATEGORY_BY_SLUG_QUERY = defineQuery(
  `*[_type == "category" && slug.current == $slug][0]{_id, slug, title}`
)

export const RENTAL_BY_CATEGORY_QUERY = defineQuery(
  `*[_type == "rental" && category->slug.current == $slug]{_id, title, image, available, pricePerDay, pricePerWeek, specs}`
)

export const RENTAL_BY_ID_QUERY = defineQuery(
  `*[_type == "rental" && _id == $id][0]{_id, title, image, available, pricePerDay, pricePerWeek, specs, description}`
)

export const PROJECT_QUERY = `*[_type == "project"] | order(date desc) {
  _id,
  title,
  slug,
  category,
  location,
  date,
  description,
  afterImage,
  beforeImage
}`

export const LATEST_PROJECTS_QUERY = `*[_type == "project" && defined(slug.current)] | order(date desc)[0...3] {
  _id,
  title,
  slug,
  category,
  location,
  date,
  description,
  afterImage,
  beforeImage
}`

export const PROJECT_COUNT_QUERY = `count(*[_type == "project" && defined(slug.current)])`

export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  location,
  date,
  description,
  beforeImage,
  afterImage
}`
