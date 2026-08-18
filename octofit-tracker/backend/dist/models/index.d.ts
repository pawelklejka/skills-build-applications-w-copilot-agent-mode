import mongoose from 'mongoose';
export declare const User: mongoose.Model<{
    name: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    profileImage: string;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    profileImage: string;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    name: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    profileImage: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    profileImage: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    profileImage: string;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    fitnessLevel: "beginner" | "intermediate" | "advanced";
    profileImage: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Team: mongoose.Model<{
    name: string;
    members: mongoose.Types.ObjectId[];
    focus: string;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    members: mongoose.Types.ObjectId[];
    focus: string;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    name: string;
    members: mongoose.Types.ObjectId[];
    focus: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    members: mongoose.Types.ObjectId[];
    focus: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    members: mongoose.Types.ObjectId[];
    focus: string;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    name: string;
    members: mongoose.Types.ObjectId[];
    focus: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Activity: mongoose.Model<{
    date: NativeDate;
    type: string;
    userId: mongoose.Types.ObjectId;
    duration: number;
    calories: number;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    date: NativeDate;
    type: string;
    userId: mongoose.Types.ObjectId;
    duration: number;
    calories: number;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    date: NativeDate;
    type: string;
    userId: mongoose.Types.ObjectId;
    duration: number;
    calories: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    date: NativeDate;
    type: string;
    userId: mongoose.Types.ObjectId;
    duration: number;
    calories: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    date: NativeDate;
    type: string;
    userId: mongoose.Types.ObjectId;
    duration: number;
    calories: number;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    date: NativeDate;
    type: string;
    userId: mongoose.Types.ObjectId;
    duration: number;
    calories: number;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const LeaderboardEntry: mongoose.Model<{
    name: string;
    userId: mongoose.Types.ObjectId;
    points: number;
    streak: number;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    userId: mongoose.Types.ObjectId;
    points: number;
    streak: number;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    name: string;
    userId: mongoose.Types.ObjectId;
    points: number;
    streak: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    userId: mongoose.Types.ObjectId;
    points: number;
    streak: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    userId: mongoose.Types.ObjectId;
    points: number;
    streak: number;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    name: string;
    userId: mongoose.Types.ObjectId;
    points: number;
    streak: number;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const Workout: mongoose.Model<{
    focus: string;
    duration: number;
    title: string;
    difficulty: "beginner" | "advanced" | "moderate";
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    focus: string;
    duration: number;
    title: string;
    difficulty: "beginner" | "advanced" | "moderate";
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    focus: string;
    duration: number;
    title: string;
    difficulty: "beginner" | "advanced" | "moderate";
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    focus: string;
    duration: number;
    title: string;
    difficulty: "beginner" | "advanced" | "moderate";
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    focus: string;
    duration: number;
    title: string;
    difficulty: "beginner" | "advanced" | "moderate";
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    focus: string;
    duration: number;
    title: string;
    difficulty: "beginner" | "advanced" | "moderate";
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=index.d.ts.map