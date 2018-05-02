const path              = require( 'path' );

const webpack           = require( 'webpack' );
const HappyPack         = require( 'happypack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const baseConfig        = require( './base' );
const defaultSettings   = require( './defaults' );

const distConfig = Object.assign( {}, baseConfig, {
    entry : {
        index           : path.join( __dirname, '../src/index.js' ),
        componentDriver : path.join( __dirname, '../src/Testing/index.js' ),
        driverSuite     : path.join( __dirname, '../src/drivers.js' )
    },
    output : {
        path          : path.join( __dirname, '/../dist' ),
        filename      : '[name].js',
        publicPath    : defaultSettings.publicPath,
        libraryTarget : 'umd'
    },

    cache : false,

    devtool : 'source-map',

    externals :
    {
        'nessie-ui' : 'nessie-ui/dist/index.js',

        'componentDriver' : 'nessie-ui/dist/componentDriver.js',

        'prop-types' :
        {
            window    : 'PropTypes',
            root      : 'PropTypes',
            commonjs2 : 'prop-types',
            commonjs  : 'prop-types',
            amd       : 'prop-types'
        },
        react :
        {
            window    : 'React',
            root      : 'React',
            commonjs2 : 'react',
            commonjs  : 'react',
            amd       : 'react'
        },
        'react-dom' :
        {
            window    : 'ReactDOM',
            root      : 'ReactDOM',
            commonjs2 : 'react-dom',
            commonjs  : 'react-dom',
            amd       : 'react-dom'
        }
    },

    plugins : [
        new ExtractTextPlugin( {
            fallback  : 'style-loader',
            filename  : 'styles.css',
            allChunks : true
        } ),
        new HappyPack( {
            id      : 'styles',
            loaders : [
                {
                    loader  : 'css-loader',
                    options :
                    {
                        modules        : true,
                        localIdentName : '[name]__[local]',
                        importLoaders  : 1
                    }
                },
                {
                    loader : 'postcss-loader'
                }
            ],
            threads : 2
        } ),
        new webpack.DefinePlugin( {
            'process.env.NODE_ENV' : '"production"'
        } ),

        new webpack.LoaderOptionsPlugin( {
            debug : false
        } ),

        new HappyPack( {
            id      : 'js',
            loaders : [ 'babel-loader' ],
            threads : 2
        } )

    ],

    module : defaultSettings.getDefaultModules()
} );


module.exports = distConfig;
