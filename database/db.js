
const authors = [
  {"name": "John Doe", "id": "au1"},
  {"name": "Jane Smith", "id": "au7"},
  {"name": "Alice Johnson", "id": "au9"},
  {"name": "David Smith", "id": "au2"},
  {"name": "Henry Adams", "id": "au4"},
  {"name": "James Lee", "id": "au11"},
  {"name": "Liam Martin", "id": "au10"}
];

const  reviews = [
  {"id": "re1", "rating": 4.2, "content": "Great product!", "blog": "bl4"},
  {"id": "re2", "rating": 3.8, "content": "Average experience", "blog": "bl16"},
  {"id": "re3", "rating": 5.0, "content": "Highly recommended", "blog": "bl5"},
  {"id": "re4", "rating": 2.5, "content": "Needs improvement", "blog": "bl12"},
  {"id": "re5", "rating": 4.7, "content": "Excellent service", "blog": "bl6"},
  {"id": "re6", "rating": 3.0, "content": "Mixed feelings", "blog": "bl4"},
  {"id": "re7", "rating": 4.5, "content": "Impressive features", "blog": "bl10"},
  {"id": "re8", "rating": 3.2, "content": "Decent value", "blog": "bl2"},
  {"id": "re9", "rating": 4.8, "content": "Worth every penny", "blog": "bl12"},
  {"id": "re10", "rating": 3.7, "content": "Could be better", "blog": "bl16"},
  {"id": "re11", "rating": 4.3, "content": "Sleek design, impressive performance", "blog": "bl14"},
  {"id": "re12", "rating": 3.9, "content": "Decent value for the price", "blog": "bl5"},
  {"id": "re13", "rating": 4.5, "content": "Easy setup, reliable features", "blog": "b12"},
  {"id": "re14", "rating": 2.8, "content": "Lacks some essential features", "blog": "bl3"},
  {"id": "re15", "rating": 4.6, "content": "Great customer support", "blog": "b7"},
  {"id": "re16", "rating": 3.4, "content": "Mixed feelings about durability", "blog": "bl12"},
  {"id": "re17", "rating": 4.1, "content": "Impressive battery life", "blog": "bl9"},
  {"id": "re18", "rating": 3.6, "content": "Could use better documentation", "blog": "bl7"},
  {"id": "re19", "rating": 4.9, "content": "Exceeded my expectations", "blog": "bl6"},
  {"id": "re20", "rating": 3.1, "content": "Average overall experience", "blog": "bl15"},
  {"id": "re21", "rating": 4.0, "content": "Solid build quality", "blog": "bl10"},
  {"id": "re22", "rating": 3.7, "content": "Decent performance", "blog": "bl14"},
  {"id": "re23", "rating": 4.8, "content": "Highly recommended", "blog": "bl11"},
  {"id": "re24", "rating": 2.2, "content": "Disappointing features", "blog": "bl5"},
  {"id": "re25", "rating": 4.4, "content": "Great value for money", "blog": "bl10"},
  {"id": "re26", "rating": 3.3, "content": "Mixed user experience", "blog": "b3"},
  {"id": "re27", "rating": 4.7, "content": "Excellent customer service", "blog": "bl14"},
  {"id": "re28", "rating": 3.5, "content": "Average durability", "blog": "bl2"},
  {"id": "re29", "rating": 4.2, "content": "Impressive performance", "blog": "bl6"},
  {"id": "re30", "rating": 3.0, "content": "Needs improvement", "blog": "bl13"}
];

const blogs = [
    {
        "id": "bl1",
        "author": "au11",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "id": "bl2",
        "author": "au11",
        "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        "id": "bl3",
        "author": "au2",
        "content": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
    },
    {
        "id": "bl4",
        "author": "au7",
        "content": "Nullam nec justo ac odio bibendum aliquet. Sed euismod, urna id aliquam tincidunt."
    },
    {
        "id": "bl5",
        "author": "au9",
        "content": "Suspendisse potenti. Fusce euismod, libero in dignissim tincidunt, elit justo."
    },
    {
        "id": "bl6",
        "author": "au2",
        "content": "Phasellus euismod, metus vel cursus hendrerit, nunc libero tincidunt libero."
    },
    {
        "id": "bl7",
        "author": "au11",
        "content": "Curabitur euismod, justo vel bibendum hendrerit, felis libero dignissim libero."
    },
    {
        "id": "bl8",
        "author": "au1",
        "content": "Aliquam erat volutpat. Sed auctor, justo vel bibendum hendrerit, felis libero."
    },
    {
        "id": "bl9",
        "author": "au4",
        "content": "Vivamus euismod, justo vel bibendum hendrerit, felis libero dignissim libero."
    },
    {
        "id": "bl10",
        "author": "au1",
        "content": "Fusce euismod, libero in dignissim tincidunt, elit justo."
    },
    {
        "id": "bl11",
        "author": "au1",
        "content": "Nullam nec justo ac odio bibendum aliquet. Sed euismod, urna id aliquam tincidunt."
    },
    {
        "id": "bl12",
        "author": "au7",
        "content": "Suspendisse potenti. Fusce euismod, libero in dignissim tincidunt, elit justo."
    },
    {
        "id": "bl13",
        "author": "au4",
        "content": "Phasellus euismod, metus vel cursus hendrerit, nunc libero tincidunt libero."
    },
    {
        "id": "bl14",
        "author": "au2",
        "content": "Curabitur euismod, justo vel bibendum hendrerit, felis libero dignissim libero."
    },
    {
        "id": "bl15",
        "author": "au7",
        "content": "Aliquam erat volutpat. Sed auctor, justo vel bibendum hendrerit, felis libero."
    },
    {
        "id": "bl16",
        "author": "au7",
        "content": "Vivamus euismod, justo vel bibendum hendrerit, felis libero dignissim libero."
    }
];

export default { authors, reviews, blogs }