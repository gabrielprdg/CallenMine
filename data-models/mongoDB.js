db.createCollection('customer', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'customer',
            required: ['document'],
            properties: {
                document: {
                    bsonType: 'objectId'
                },
                name: {
                    bsonType: 'string'
                }
            }
        }
    }
});

db.createCollection('scheduling', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'scheduling',
            required: ['customer', 'schedules'],
            properties: {
                customer: {
                    bsonType: 'objectId'
                },
                note: {
                    bsonType: 'string'
                },
                schedules: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'objectId'
                    }
                }
            }
        }
    }
});

db.createCollection('schedules', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'schedules',
            required: ['scheduling', 'date', 'experts'],
            properties: {
                scheduling: {
                    bsonType: 'objectId'
                },
                date: {
                    bsonType: 'date'
                },
                experts: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'objectId'
                    }
                }
            }
        }
    }
});

db.createCollection('expert', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'expert',
            required: ['name', 'expertises'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                expertises: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'string'
                    }
                }
            }
        }
    }
});

db.createCollection('scheduling_block', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'scheduling_block',
            required: ['start_date', 'end_date'],
            properties: {
                start_date: {
                    bsonType: 'date'
                },
                end_date: {
                    bsonType: 'date'
                },
                note: {
                    bsonType: 'string'
                }
            }
        }
    }
});