import mongoose, { ConnectOptions } from 'mongoose';

interface MongoUri {
    uri: string;
}

const connectMongoDB = async (): Promise<void> => {
    try {
        const mongodbUri: MongoUri = { uri: process.env.MONGODB_URI || '' }; // Set a default value if process.env.MONGODB_URI is undefined
        await mongoose.connect(mongodbUri.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions); // Add 'as ConnectOptions' to specify the type
    } catch (error) {
        throw new Error('Error connecting to DB');
    }
};

export default connectMongoDB;
